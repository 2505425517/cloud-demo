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
        return careers;
    }
    @Override
    public Boolean add(Career career) {
        int row = expertCareerMapper.insert(career);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
    @Override
    public Boolean update(Career career) {
        int row = expertCareerMapper.updateByPrimaryKeySelective(career);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            expertCareerMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
