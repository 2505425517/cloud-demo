package com.mywork.user.controller;



import com.github.pagehelper.Page;
import com.mywork.expert.pojo.Career;
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

    @GetMapping("/{id}")
    public User queryById(@PathVariable("id") Integer id,
                          @RequestHeader(value = "Truth", required = false) String truth) {
        System.out.println("truth: " + truth);
        User user = userService.findById(id);
        System.out.println(user);
        return user;
    }

//    @RequestMapping("/test/{userId}")
//    public Result queryById( @PathVariable("userId") Integer userId){
//        System.out.println("userid = " + userId );
//        User user = userService.querycareerById(userId);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
//    }
    @RequestMapping("/test/{userId}")
    public User queryById( @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = userService.queryById(userId);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
        return user;
    }
    @GetMapping("/find")
    public List<User> findall() {
                List<User> all = userService.findAll();
//        return new com.mywork.user.common.Result(false,200,"请求成功!",all);
        return all;
    }

//    @RequestMapping("/find")
//    @PostMapping("/find")
//    public com.mywork.user.common.Result find(){
//        List<User> all = userService.findAll();
//        return new com.mywork.user.common.Result(false,200,"请求成功!",all);
//    }
//    @RequestMapping("/search")
//    public com.mywork.user.common.PageResult search(@RequestBody Map searchMap){
//        Page<User> page = userService.search(searchMap);
//        return new PageResult(true, com.mywork.user.common.StatusCode.OK, MessageConstant.COMMUNITY_SEARCH_SUCCESS,page.getResult(),page.getTotal());
//    }
    @RequestMapping("/add")
    public Result add(@RequestBody User user){
        Boolean add = userService.add(user);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_ADD_SUCCESS);
    }

//    @PostMapping("/add")
//    public boolean add(@RequestBody User user){
//        System.out.println(user.getName());
//        Boolean add = userService.add(user);
//        return add;
//    }
    @RequestMapping("/findById/{userId}")
    @PostMapping("/findById/{userId}")
    public Result findById( @RequestBody @PathVariable("userId") Integer userId){
        System.out.println("userid = " + userId );
        User user = userService.findById(userId);
        System.out.println(user);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,user);
    }
    @RequestMapping("/update")
    public Result update(@RequestBody User user){
        Boolean add = userService.update(user);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
//    @RequestMapping("/update")
//    public boolean update(@RequestBody User user){
//        boolean update = userService.update(user);
//        return update;
//    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = userService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @PostMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = userService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
