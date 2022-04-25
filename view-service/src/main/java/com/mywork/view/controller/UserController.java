package com.mywork.view.controller;



import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.pojo.User;
import com.mywork.view.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @Auth: zhuan
 * @Desc: 小区管理控制层:只负责接收前端浏览器发送的请求和请求参数，调用service层获取业务逻辑加工处理后的数据
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getExpert")
    public PageResult getExpert(@RequestBody Map searchMap){
        System.out.println(searchMap);
        PageResult page = userService.getExpert(searchMap);
        return page;
    }

    @RequestMapping("/{userId}")
//    @PostMapping("/findById/{userId}")
    public Result findById(@PathVariable("userId") Integer userId){
        Result result = userService.findById(userId);
        System.out.println(result);
        return result;
    }
    @RequestMapping("/find/{userId}")
    public Result queryById( @PathVariable("userId") Integer userId){
        Result result = userService.queryById(userId);
        return result;
//        return user;
    }
    @RequestMapping("/find")
    public Result findall() {
        Result result = userService.findAll();
        return result;
    }

    @RequestMapping("/add")
    public Result add(@RequestBody User user){
        Result result = userService.add(user);
        return result;
    }

    @RequestMapping("/update")
    public Result update(@RequestBody User user){
        Result result = userService.update(user);
        return result;
    }

    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result result = userService.del(ids);
        return result;
    }

}
