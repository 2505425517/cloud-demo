package com.mywork.view.service;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.Career;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Repository
@Service
public class ExpertCareerServiceImpl implements ExpertCareerService {


    @Autowired
    private RestTemplate restTemplate;
    @Override
    public List<Career> queryById(Integer userId) {
        //1.远程查询
        String url = "http://expertservice/career/find/"+userId ;
        Career[] careers = restTemplate.getForObject(url, Career[].class);
        return Arrays.asList(careers);
    }

    @Override
    public Result add(Career career) {
        String url = "http://expertservice/career/add/" ;
        Result flag =  restTemplate.postForObject(url, career , Result.class);
        return flag;
    }

    @Override
    public Result update(Career career) {
        String url = "http://expertservice/career/update/" ;
        Result flag =  restTemplate.postForObject(url, career , Result.class);
        return flag;
    }

    @Override
    public Result  del(List<Integer> ids) {
        String url = "http://expertservice/career/del/" ;
        Result flag =  restTemplate.postForObject(url,ids , Result.class);
        return flag;
    }

}
