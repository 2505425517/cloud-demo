package com.mywork.expert.service;


import com.mywork.expert.mapper.ExpertCareerMapper;
import com.mywork.expert.pojo.Career;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class ExpertCareerServiceImpl implements ExpertCareerService {

    @Autowired
    private ExpertCareerMapper expertCareerMapper;

//    @Autowired
//    private RestTemplate restTemplate;
    @Override
    public List<Career> queryById(Integer userId) {
        // 1.查询订单
        List<Career> careers = expertCareerMapper.selectbyid(userId);
//        // 2.远程查询订单
//        String url = "http://userservice/user/" + order.getUserId();
//        User user = restTemplate.getForObject(url, User.class);
//        expertcarrer.setUser(user);
        // 4.返回
        return careers;
    }

//
//    @Override
//    public Page<Expert> search(Map searchMap) {
//        //通用Mapper多条件搜索，标准写法
//        Example example = new Example(Expert.class);//指定查询的表tb_Expert
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
//        Page<Expert> communities = (Page<Expert>) ExpertMapper.selectByExample(example);
//        return communities;
//    }

    @Override
    public Boolean add(Career career) {
        int row = expertCareerMapper.insert(career);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

//    @Override
//    public Career findById(Integer id) {
//        return expertCareerMapper.selectByPrimaryKey(id);
//    }

    @Override
    public Boolean update(Career career) {
        int row = expertCareerMapper.updateByPrimaryKeySelective(career);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
//
//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        Expert Expert = new Expert();
//        Expert.setId(id);
//        Expert.setStatus(status);
//        int row = ExpertMapper.updateByPrimaryKeySelective(Expert);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }
//
    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            expertCareerMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
