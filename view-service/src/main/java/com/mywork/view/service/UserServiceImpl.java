package com.mywork.view.service;



//import com.mywork.user.common.Result;

import com.mywork.view.common.PageResult;
import com.mywork.view.pojo.User;
import com.mywork.view.common.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Repository
@Service
public class UserServiceImpl  implements UserService {

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public PageResult getExpert(Map searchMap) {
        //1.远程查询
        String url = "http://userservice/user/getExpert/" ;
        PageResult page =  restTemplate.postForObject(url, searchMap ,PageResult.class);
        System.out.println(searchMap);
        return page;
    }
    @Override
    public Result queryById(@RequestBody Integer userId) {
        String url = "http://userservice/user/find/"+userId ;
        Result page =  restTemplate.getForObject(url, Result.class);
        return page;
    }
    @Override
    public Result findById(@RequestBody Integer userid) {
        String url = "http://userservice/user/"+userid ;
        Result page =  restTemplate.getForObject(url, Result.class);
        return page;
    }
    @Override
    @ResponseBody
    public Result findAll() {
        String url = "http://userservice/user/find/" ;
        Result users = restTemplate.getForObject(url, Result.class);
        return users;
    }
    @Override
    public Result add(User user) {
        String url = "http://userservice/user/add/" ;
        Result result = restTemplate.postForObject(url, user, Result.class);
        return result;
    }

    @Override
    public Result update(User user) {
        String url = "http://userservice/user/update/" ;
        Result result = restTemplate.postForObject(url, user, Result.class);
        return result;
    }
    @Override
    public Result del(List<Integer> ids) {
        String url = "http://userservice/user/del/" ;
        Result result = restTemplate.postForObject(url, ids, Result.class);
        return result;
    }

}
