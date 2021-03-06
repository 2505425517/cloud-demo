package com.mywork.expert.controller;


import com.mywork.expert.common.MessageConstant;
import com.mywork.expert.common.Result;
import com.mywork.expert.common.StatusCode;
import com.mywork.expert.pojo.Career;
import com.mywork.expert.service.ExpertCareerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Auth: zhuan
 * @Desc: 小区管理控制层:只负责接收前端浏览器发送的请求和请求参数，调用service层获取业务逻辑加工处理后的数据
 */
@RestController
@RequestMapping("/career")
public class ExpertCareerController {
    
    @Autowired
    private ExpertCareerServiceImpl expertCareerService;


    @RequestMapping("/find/{userId}")
    public List<Career> queryByUserId(@PathVariable("userId") Integer userid) {
        // 根据id查询订单并返回
        List<Career> all = expertCareerService.queryById(userid);
//        return  new Result(true,StatusCode.OK,"请求成功",all);
        return all;
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Career career){
        Boolean add = expertCareerService.add(career);
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_ADD_SUCCESS);
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Career career){
        Boolean add = expertCareerService.update(career);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = expertCareerService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
