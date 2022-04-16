package com.mywork.view.controller;


import com.mywork.view.common.MessageConstant;
import com.mywork.view.common.Result;
import com.mywork.view.common.StatusCode;

import com.mywork.view.pojo.User;
import com.mywork.view.service.ViewService;
import com.mywork.view.service.ViewServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @Auth: zhuan
 * @Desc: 小区管理控制层:只负责接收前端浏览器发送的请求和请求参数，调用service层获取业务逻辑加工处理后的数据
 */
@RestController
@RequestMapping("/view")
public class ViewController {

    @Autowired
    private ViewServiceImpl viewService;
    @GetMapping("/test/{userId}")
    public User test( @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = viewService.test(userId);
////        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
//        return user;
        System.out.println(user);
        System.out.println(user.toString());
        return user;
    }

    @GetMapping("/user/{userId}")
    public User queryById( @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = viewService.getUserById(userId);
////        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
//        return user;
        System.out.println(user);
        System.out.println(user.toString());
        return user;
    }
    @GetMapping("/user")
    public List<User> queryAll( ){
        List<User> users = viewService.getUser();
        System.out.println(users);
//        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
        return users;
    }
}
