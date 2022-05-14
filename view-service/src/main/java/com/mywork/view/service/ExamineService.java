package com.mywork.view.service;

import com.mywork.view.common.Result;
import com.mywork.view.pojo.Examine;

import java.util.List;
import java.util.Map;

public interface ExamineService {

   Result findAll();

   Result add(Examine examine);

   Result findByUserId(Integer userid);

   Result findByProjectId(Integer projectid);

   Result update(Examine examine);

   Result del(List<Integer> ids);

   Result updateStatus(Map<String,Integer> map);

   Result getStatus(Map<String,Integer> map);

    Result selectbyboth(Integer projectid, Integer userid);
}
