package com.mywork.view.service;

import com.mywork.view.common.Result;
import com.mywork.view.pojo.Project;

import java.util.List;

public interface ProjectService {


   Result findAll();

   Result findById(Integer id);

   Result add(Project project);

   Result update(Project project);

   Result del(List<Integer> ids);
}
