package com.mywork.view.controller;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.Career;
import com.mywork.view.service.ExpertCareerService;
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
    private ExpertCareerService expertCareerService;


    @RequestMapping("/find/{userId}")
    public List<Career> queryByUserId(@PathVariable("userId") Integer userid) {
        return expertCareerService.queryById(userid);
    }
//
    @RequestMapping("/add")
    public Result add(@RequestBody Career career){
        Result add = expertCareerService.add(career);
        return add;
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Career career){
        Result update = expertCareerService.update(career);
        return update;
    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result del = expertCareerService.del(ids);
        return del;
    }
}
