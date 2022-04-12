package com.mywork.expert.service;

import com.mywork.expert.pojo.Career;

import java.util.List;

public interface ExpertCareerService {
    public List<Career> queryById(Integer userId);
    public Boolean add(Career career);

//    Career findById(Integer id);

    Boolean update(Career career);

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
    Boolean del(List<Integer> ids);
}
