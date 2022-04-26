package com.mywork.view.controller;


import com.mywork.view.common.Result;
import com.mywork.view.pojo.Examine;
import com.mywork.view.service.ExamineService;
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
@RequestMapping("/examine")
public class ExamineController {
    
    @Autowired
    private ExamineService examineService;

    @RequestMapping("/findall")
    public Result findAll() {
        // 根据id查询订单并返回
        Result page = examineService.findAll();
        return page;
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Examine examine){
        Result page = examineService.add(examine);
        return page;
    }
    @RequestMapping("/findByUserId/{userId}")
    public Result findById(@PathVariable("userId") Integer userid){
        Result page = examineService.findByUserId(userid);
        return page;
    }
    @RequestMapping("/findByProjectId/{projectId}")
    public Result findByProjectId(@PathVariable("projectId") Integer projectid){
        Result page = examineService.findByProjectId(projectid);
        return page;
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Examine examine){
        Result page = examineService.update(examine);
        return page;
    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result page = examineService.del(ids);
        return page;
    }
    @RequestMapping("/updateStatus")
    public Result updateStatus(@RequestBody Map<String,Object> datas){
        Result page = examineService.updateStatus(datas);
        return page;
    }
    @RequestMapping("/getStatus")
    public Result getStatus(@RequestBody Map<String,Object> datas){
        Result page = examineService.getStatus(datas);
        return page;
    }
}
