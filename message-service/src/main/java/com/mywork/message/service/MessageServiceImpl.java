package com.mywork.message.service;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.util.StringUtil;
import com.mywork.message.mapper.MessageMapper;
import com.mywork.message.pojo.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;
import java.util.Map;

@Repository
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageMapper messageMapper;

//    @Autowired
//    private RestTemplate restTemplate;

//
    @Override
    public Page<Message> search(Map searchMap) {
        //通用Mapper多条件搜索，标准写法
        Example example = new Example(Message.class);//指定查询的表tb_Project
        //1.初始化分页条件
        int pageNum = 1;
        int pageSize = 5;
        if(searchMap != null){
            Example.Criteria criteria = example.createCriteria();//创建查询条件
            //时间区间
            if(StringUtil.isNotEmpty((String) searchMap.get("startTime"))){
                criteria.andGreaterThanOrEqualTo("messageTime",searchMap.get("startTime"));
            }
            if(StringUtil.isNotEmpty((String) searchMap.get("endTime"))){
                criteria.andLessThanOrEqualTo("messageTime",searchMap.get("endTime"));
            }
            //名称模糊搜索
            if(StringUtil.isNotEmpty((String) searchMap.get("data"))){
                criteria.andLike("messageData", "%"+(String) searchMap.get("data")+"%");
            }
            if(StringUtil.isNotEmpty(searchMap.get("getuserid").toString())){
                criteria.andLike("messageGetid", "%"+(String) (searchMap.get("getuserid").toString())+"%");
            }
            //分页
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageNum"))){
//                pageNum = Integer.parseInt((String) searchMap.get("pageNum"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageSize"))){
//                pageSize = Integer.parseInt((String) searchMap.get("pageSize"));
//            }
            if((Integer) searchMap.get("pageNum") !=null){
                pageNum = (Integer) searchMap.get("pageNum");
            }
            if((Integer) searchMap.get("pageSize") !=null){
                pageSize = (Integer) searchMap.get("pageSize");
            }
        }
        PageHelper.startPage(pageNum,pageSize);//使用PageHelper插件完成分页
        Page<Message> messages = (Page<Message>) messageMapper.selectByExample(example);
        return messages;
    }

    @Override
    public List<Message> findAll() {
        return messageMapper.selectAll();
    }
    @Override
    public Boolean add(Message message) {
        int row = messageMapper.insert(message);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public List<Message> findByUserId(Integer userid) {
        return messageMapper.selectbyid(userid);
    }

    @Override
    public Boolean update(Message project) {
        int row = messageMapper.updateByPrimaryKeySelective(project);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
//
//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        Project Project = new Project();
//        Project.setId(id);
//        Project.setStatus(status);
//        int row = messageMapper.updateByPrimaryKeySelective(Project);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }

    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            messageMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
