package com.mywork.view.controller;


import com.github.pagehelper.Page;
import com.mywork.view.common.MessageConstant;
import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.common.StatusCode;
import com.mywork.view.pojo.Message;
import com.mywork.view.service.MessageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @Auth: zhuan
 * @Desc: 小区管理控制层:只负责接收前端浏览器发送的请求和请求参数，调用service层获取业务逻辑加工处理后的数据
 */
@RestController
@RequestMapping("/message")
public class MessageController {
    
    @Autowired
    private MessageServiceImpl messageService;

    @RequestMapping("/search")
    public PageResult search(@RequestBody Map searchMap){
        PageResult page = messageService.search(searchMap);
        return page;
    }
    @RequestMapping("/find")
    public Result findAll() {
        Result page = messageService.findAll();
        return page;
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Message message){
        Result add = messageService.add(message);
        return add;
    }
    @RequestMapping("/findById/{userId}")
    public Result findById(@PathVariable("userId") Integer userid){
        Result page = messageService.findByUserId(userid);
        return page;
    }

    @RequestMapping("/update")
    public Result update(@RequestBody Message message){
        Result update = messageService.update(message);
        return update;
    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = messageService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result del = messageService.del(ids);
        return del;
    }
}
