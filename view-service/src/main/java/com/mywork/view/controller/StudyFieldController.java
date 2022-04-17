package com.mywork.view.controller;


import com.mywork.view.common.Result;
import com.mywork.view.pojo.Study;
import com.mywork.view.service.StudyFieldService;
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
@RequestMapping("/study")
public class StudyFieldController {

    @Autowired
    private StudyFieldService studyFieldService;


    @RequestMapping("/find/{userId}")
    public List<Study> queryByUserId(@PathVariable("userId") Integer userid) {
        return studyFieldService.queryById(userid);
    }
    //    
    @RequestMapping("/add")
    public Result add(@RequestBody Study study){
        Result add = studyFieldService.add(study);
        return add;
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Study study){
        Result update = studyFieldService.update(study);
        return update;
    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result del = studyFieldService.del(ids);
        return del;
    }
}
