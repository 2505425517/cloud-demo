package com.mywork.view.service;

import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.pojo.Project;

import java.util.List;
import java.util.Map;

public interface ProjectService {


    Result findForExamine(Integer userid);

    Result findAll();

   Result findById(Integer id);

   Result add(Project project);

   Result update(Project project);

   Result del(List<Integer> ids);

    Result findByUserID(Integer userid);

    PageResult search(Map searchMap);
}
