package com.mywork.expert.service;

import com.mywork.expert.pojo.Career;

import java.util.List;

public interface ExpertCareerService {
    public List<Career> queryById(Integer userId);
    public Boolean add(Career career);
    Boolean update(Career career);
    Boolean del(List<Integer> ids);
}
