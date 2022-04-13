package com.mywork.view.service;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.User;

import com.mywork.view.feign.UserClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;

@Repository
@Service
public class ViewServiceImpl implements ViewService {

//    @Autowired
//    private RestTemplate restTemplate;


    /**
     * 创建指定字符集的RestTemplate
     *
     * @param charset 编码
     * @return 返回结果
     */
    public static RestTemplate getInstance(String charset) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(new StringHttpMessageConverter(Charset.forName(charset)));
        return restTemplate;
    }

    private static RestTemplate restTemplate;
    @Resource
    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Autowired
    private UserClient userClient;
    @Override
    public Result updateUser(@RequestBody User user) {
//        1.远程查询
        String url = "http://userservice/user/update/";
        Result flag = restTemplate.postForObject(url, user, Result.class);
//        boolean flag = userClient.adduser(user);
//        System.out.println(user);
        System.out.println(user.toString());
        return flag;
    }
    @Override
    public Result addUser(@RequestBody User user) {
        //1.远程查询
        String url = "http://userservice/user/add/";
        Result flag = restTemplate.postForObject(url, user, Result.class);
//        boolean flag = userClient.adduser(user);
        System.out.println(user);
        System.out.println(user.toString());
        return flag;
    }
    @Override
    public User test(@RequestBody Integer id) {
        //1.远程查询
        String url = "http://userservice/user/test/"+id;
        User user = restTemplate.getForObject(url, User.class);
        System.out.println(user);
        return user;
    }
    @Override
    public User getUserById(@RequestBody Integer id) {
        // 1.查询订单
//        Order order = orderMapper.findById(orderId);
        // 2.远程查询订单
        String url = "http://userservice/user/" + id;
        User user = restTemplate.getForObject(url, User.class);
        //order.setUser(user);
        // 4.返回
        return user;
//        User user = userClient.findById(id);
//        System.out.println(user);
////        System.out.println(user.toString());
//        return user;
    }

    @Override
    public List<User> getUser() {
        //1.远程查询
        String url = "http://userservice/user/find/" ;
//        User user = restTemplate.getForObject(url, User.class);


        User[] user =  restTemplate.getForObject(url, User[].class);
        System.out.println(user);
        List<User> userList = Arrays.asList(user);
        System.out.println(userList);
        return userList;


//        List<User> user = userClient.findall();
////        System.out.println(user);
//        System.out.println(user);
//        return user;
    }


}
