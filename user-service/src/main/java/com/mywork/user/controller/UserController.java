package com.mywork.user.controller;



import com.github.pagehelper.Page;
import com.mywork.user.common.MessageConstant;
import com.mywork.user.pojo.User;
import com.mywork.user.service.UserService;
import com.mywork.user.common.PageResult;
import com.mywork.user.common.Result;
import com.mywork.user.common.StatusCode;
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
    public PageResult search(@RequestBody Map searchMap){
        Page<User> page = userService.getExpert(searchMap);
        return new PageResult(true, StatusCode.OK, MessageConstant.COMMUNITY_SEARCH_SUCCESS,page.getResult(),page.getTotal());
    }

    @RequestMapping("/{userId}")
//    @PostMapping("/findById/{userId}")
    public Result findById( @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = userService.findById(userId);
        System.out.println(user);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
    }
    @RequestMapping("/find/{userId}")
    public Result queryById( @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = userService.queryById(userId);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
//        return user;
    }
    @RequestMapping("/find")
    public Result findall() {
                List<User> all = userService.findAll();
        return new Result(true,StatusCode.OK,"查找所有用户成功!",all);
//        return all;
    }

    @RequestMapping("/add")
    public Result add(@RequestBody User user){
        System.out.println(user.getName());
        Boolean add = userService.add(user);
        return new Result(true, StatusCode.OK,MessageConstant.COMMUNITY_ADD_SUCCESS);
    }

    @RequestMapping("/update")
    public Result update(@RequestBody User user){
        Boolean add = userService.update(user);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }

    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = userService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }

//    @GetMapping("/{id}")
//    public User queryById(@PathVariable("id") Integer id,
//                          @RequestHeader(value = "Truth", required = false) String truth) {
//        User user = userService.findById(id);
//        return user;
//    }
    //    @RequestMapping("/test/{userId}")
//    public Result queryById( @PathVariable("userId") Integer userId){
//        System.out.println("userid = " + userId );
//        User user = userService.querycareerById(userId);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
//    }
    //    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = userService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
}
