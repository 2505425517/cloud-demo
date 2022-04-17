package com.mywork.expert.service;


import com.mywork.expert.mapper.StudyFieldMapper;

import com.mywork.expert.pojo.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class StudyFieldServiceImpl implements StudyFieldService {

    @Autowired
    private StudyFieldMapper studyFieldMapper;
    @Override
    public List<Study> queryById(Integer userId) {
        List<Study> studys = studyFieldMapper.selectbyid(userId);
        return studys;
    }
    @Override
    public Boolean add(Study study) {
        int row = studyFieldMapper.insert(study);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
    @Override
    public Boolean update(Study study) {
        int row = studyFieldMapper.updateByPrimaryKeySelective(study);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            studyFieldMapper.deleteByPrimaryKey(id);
        }
        return true;
    }
}
