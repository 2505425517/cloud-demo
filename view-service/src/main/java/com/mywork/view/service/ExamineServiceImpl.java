package com.mywork.view.service;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.Examine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Service
public class ExamineServiceImpl implements ExamineService {
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Result findAll() {
        String url = "http://examineservice/examine/find" ;
        Result page =  restTemplate.getForObject(url , Result.class);
        System.out.println(page);
        return page;
    }
    @Override
    public Result findByUserId(Integer userid) {
        String url = "http://examineservice/examine/findByUserId/" + userid;
        Result page =  restTemplate.getForObject(url, Result.class);
        return page;
    }
    @Override
    public Result findByProjectId(Integer projectid) {
        String url = "http://examineservice/examine/findByProjectId/" + projectid;
        Result page =  restTemplate.getForObject(url, Result.class);
        return page;
    }
    @Override
    public Result add(Examine examine) {
        String url = "http://examineservice/examine/add/" ;
        Result page =  restTemplate.postForObject(url, examine ,Result.class);
        return page;
    }
    @Override
    public Result update(Examine examine) {
        String url = "http://examineservice/examine/update/" ;
        Result page =  restTemplate.postForObject(url, examine ,Result.class);
        return page;
    }
    @Override
    public Result del(List<Integer> ids) {
        String url = "http://examineservice/examine/update/" ;
        Result page =  restTemplate.postForObject(url, ids ,Result.class);
        return page;
    }
    @Override
//    public Result updateStatus(Integer projectid, Integer userid, Integer status) {
    public Result updateStatus(Map<String,Integer> map) {
        String url = "http://examineservice/examine/updateStatus/" ;
//        Map<String,Object> map = new HashMap<String, Object>();
//        map.put("projectid",projectid);
//        map.put("userid",userid);
//        map.put("status",status);
        Result page =  restTemplate.postForObject(url, map ,Result.class);
        return page;
    }
    @Override
//    public Result getStatus(Integer projectid, Integer userid) {
    public Result getStatus(Map<String,Integer> map) {
        String url = "http://examineservice/examine/getStatus/" ;
//        Map<String,Object> map = new HashMap<String, Object>();
//        map.put("projectid",projectid);
//        map.put("userid",userid);
        Result page =  restTemplate.postForObject(url, map ,Result.class);
        return page;
    }
}
