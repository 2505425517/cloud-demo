package com.mywork.message.controller;


import com.github.pagehelper.Page;
import com.mywork.message.common.PageResult;
import com.mywork.message.common.StatusCode;
import com.mywork.message.service.MessageServiceImpl;
import com.mywork.message.common.MessageConstant;
import com.mywork.message.common.Result;
import com.mywork.message.pojo.Message;
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
        Page<Message> page = messageService.search(searchMap);
        return new PageResult(true, StatusCode.OK, MessageConstant.COMMUNITY_SEARCH_SUCCESS,page.getResult(),page.getTotal());
    }

    @RequestMapping("/find")
    public Result findAll() {
        // 根据id查询订单并返回
        List<Message> messages = messageService.findAll();
        return new Result(true, StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,messages);
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Message message){
        Boolean add = messageService.add(message);
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_ADD_SUCCESS);
    }
    @RequestMapping("/findById/{userId}")
    public Result findById(@PathVariable("userId") Integer userid){
        List<Message> messages = messageService.findByUserId(userid);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,messages);
    }

    @RequestMapping("/update")
    public Result update(@RequestBody Message message){
        Boolean update = messageService.update(message);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = messageService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = messageService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
