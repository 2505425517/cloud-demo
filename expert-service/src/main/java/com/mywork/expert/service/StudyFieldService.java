package com.mywork.expert.service;

import com.mywork.expert.pojo.Study;

import java.util.List;

public interface StudyFieldService {
    List<Study> queryById(Integer userId);

    Boolean add(Study study);

    Boolean update(Study study);

    Boolean del(List<Integer> ids);
}
