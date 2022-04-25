package com.mywork.user.service;



//import com.mywork.user.common.Result;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.util.StringUtil;
import com.mywork.user.mapper.UserMapper;
import com.mywork.user.pojo.Career;
import com.mywork.user.pojo.Study;
import com.mywork.user.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import tk.mybatis.mapper.entity.Example;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Repository
@Service
public class UserServiceImpl  implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Page<User> getExpert(Map searchMap) {
        //通用Mapper多条件搜索，标准写法
        Example example = new Example(User.class);//指定查询的表tb_Project
        //1.初始化分页条件
        int pageNum = 1;
        int pageSize = 5;
        if(searchMap != null){
            Example.Criteria criteria = example.createCriteria();//创建查询条件
            //名称模糊搜索
            if(StringUtil.isNotEmpty((String) searchMap.get("data"))){
                criteria.andLike("name", "%"+(String) searchMap.get("data")+"%");
            }
            //现居城市
            if(StringUtil.isNotEmpty((String) searchMap.get("precentcity"))){
                criteria.andLike("precentcity", "%"+(String) searchMap.get("precentcity")+"%");
            }
//            //避开从业单位
//            if(StringUtil.isNotEmpty((String) searchMap.get("workUnit"))){
//                criteria.andLike("workUnit", "%"+(String) searchMap.get("workUnit")+"%");
//            }
            if((Integer) searchMap.get("pageNum") !=null){
                pageNum = (Integer) searchMap.get("pageNum");
            }
            if((Integer) searchMap.get("pageSize") !=null){
                pageSize = (Integer) searchMap.get("pageSize");
            }
        }

        PageHelper.startPage(pageNum,pageSize);//使用PageHelper插件完成分页
        List<User> userList = userMapper.selectByExample(example);
        for (User user : userList) {
            String url  = "http://expertservice/career/find/" + user.getUserid();
            String url2 = "http://expertservice/study/find/" + user.getUserid();
            Career[] careers = restTemplate.getForObject(url, Career[].class);
            Study[] studys = restTemplate.getForObject(url2, Study[].class);
            user.setCareers(Arrays.asList(careers));
            user.setStudys(Arrays.asList(studys));
//            this.queryById(user.getUserid());
        }
        System.out.println(userList);
        Page<User> users = (Page<User>)userList;
        System.out.println(users);
        return users;
    }

    @Override
    @ResponseBody
    public User queryById(@RequestBody Integer userId) {
        // 1.查询订单
        User thisuser= userMapper.selectByPrimaryKey(userId);
        // 2.远程查询订单
        String url = "http://expertservice/career/find/" + thisuser.getUserid();
        String url2 = "http://expertservice/study/find/" + thisuser.getUserid();

        Career[] careers = restTemplate.getForObject(url, Career[].class);
        Study[] studys = restTemplate.getForObject(url2, Study[].class);
//        List<Career> careers =  restTemplate.getForObject(url,Career.class);
        thisuser.setCareers(Arrays.asList(careers));
        thisuser.setStudys(Arrays.asList(studys));
        // 4.返回
        return thisuser;
    }

    @Override
    @ResponseBody
    public List<User> findAll() {
        List<User> users = userMapper.selectAll();
        return users;
    }

    @Override
    public Boolean add(User user) {
        int row = userMapper.insert(user);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    @ResponseBody
    public User findById(@RequestBody Integer id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public Boolean update(User User) {
        int row = userMapper.updateByPrimaryKeySelective(User);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            userMapper.deleteByPrimaryKey(id);
        }
        return true;
    }


//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        User User = new User();
//        User.setId(id);
//        User.setStatus(status);
//        int row = UserMapper.updateByPrimaryKeySelective(User);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }
//
//    @Override
//    @ResponseBody
//    public User querycareerById(@RequestBody Integer userId) {
//        // 1.查询订单
//        User thisuser= userMapper.selectByPrimaryKey(userId);
//        // 2.远程查询订单
//        String url = "http://expertservice/career/find/" + thisuser.getUserid();
//
//        Career[] careers = restTemplate.getForObject(url, Career[].class);
////        List<Career> careers =  restTemplate.getForObject(url,Career.class);
//        thisuser.setCareers(Arrays.asList(studys));
//        // 4.返回
//        return thisuser;
//    }
//    @Override
//    public User[] findAll() {
//         users = userMapper.selectAll();
//
//        return users;
//    }
//    @Override
//    public Page<User> search(Map searchMap) {
//        return null;
//    }
    //    @Override
//    public Boolean add(User expert) {
//        return null;
//    }
//
//    @Override
//    public Page<User> search(Map searchMap) {
//        //通用Mapper多条件搜索，标准写法
//        Example example = new Example(User.class);//指定查询的表tb_User
//        //1.初始化分页条件
//        int pageNum = 1;
//        int pageSize = 2;
//        if(searchMap != null){
//            Example.Criteria criteria = example.createCriteria();//创建查询条件
//            //时间区间
//            if(StringUtil.isNotEmpty((String) searchMap.get("startTime"))){
//                criteria.andGreaterThanOrEqualTo("createTime",searchMap.get("startTime"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("endTime"))){
//                criteria.andLessThanOrEqualTo("createTime",searchMap.get("endTime"));
//                criteria.andLessThanOrEqualTo("createTime",searchMap.get("endTime"));
//            }
//            //名称模糊搜索
//            if(StringUtil.isNotEmpty((String) searchMap.get("name"))){
//                criteria.andLike("name", "%"+(String) searchMap.get("name")+"%");
//            }
//            //分页
//            /*if(StringUtil.isNotEmpty((String) searchMap.get("pageNum"))){
//                pageNum = Integer.parseInt((String) searchMap.get("pageNum"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageSize"))){
//                pageSize = Integer.parseInt((String) searchMap.get("pageSize"));
//            }*/
//            if((Integer) searchMap.get("pageNum") !=null){
//                pageNum = (Integer) searchMap.get("pageNum");
//            }
//            if((Integer) searchMap.get("pageSize") !=null){
//                pageSize = (Integer) searchMap.get("pageSize");
//            }
//        }
//        PageHelper.startPage(pageNum,pageSize);//使用PageHelper插件完成分页
//        Page<User> communities = (Page<User>) UserMapper.selectByExample(example);
//        return communities;
//    }
//
}
