package com.mywork.view.service;


import com.mywork.view.common.Result;
import com.mywork.view.pojo.Study;

import java.util.List;

public interface StudyFieldService {
    List<Study> queryById(Integer userId);
    Result add(Study study);
    Result update(Study study);
    Result del(List<Integer> ids);
}
