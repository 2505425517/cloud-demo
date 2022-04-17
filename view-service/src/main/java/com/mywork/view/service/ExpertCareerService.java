package com.mywork.view.service;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.Career;

import java.util.List;

public interface ExpertCareerService {
    List<Career> queryById(Integer userId);
    Result add(Career career);
    Result update(Career career);
    Result del(List<Integer> ids);
}
