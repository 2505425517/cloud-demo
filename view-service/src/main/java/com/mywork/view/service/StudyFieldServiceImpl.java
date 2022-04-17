package com.mywork.view.service;


import com.mywork.view.common.Result;
import com.mywork.view.pojo.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Repository
@Service
public class StudyFieldServiceImpl implements StudyFieldService {
    @Autowired
    private RestTemplate restTemplate;
    @Override
    public List<Study> queryById(Integer userId) {
        //1.远程查询
        String url = "http://expertservice/study/find/"+userId ;
        Study[] studys = restTemplate.getForObject(url, Study[].class);
        return Arrays.asList(studys);
    }

    @Override
    public Result add(Study career) {
        String url = "http://expertservice/study/add/" ;
        Result flag =  restTemplate.postForObject(url, career , Result.class);
        return flag;
    }

    @Override
    public Result update(Study career) {
        String url = "http://expertservice/study/update/" ;
        Result flag =  restTemplate.postForObject(url, career , Result.class);
        return flag;
    }

    @Override
    public Result  del(List<Integer> ids) {
        String url = "http://expertservice/study/del/" ;
        Result flag =  restTemplate.postForObject(url,ids , Result.class);
        return flag;
    }
}
