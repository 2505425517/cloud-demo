package com.mywork.expert.controller;


import com.mywork.expert.common.MessageConstant;
import com.mywork.expert.common.Result;
import com.mywork.expert.common.StatusCode;
import com.mywork.expert.pojo.Study;
import com.mywork.expert.service.StudyFieldServiceImpl;
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
    private StudyFieldServiceImpl studyFieldService;

    @RequestMapping("/find/{userId}")
    public List<Study> queryByUserId(@PathVariable("userId") Integer userid) {
        return studyFieldService.queryById(userid);
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Study study){
        Boolean add = studyFieldService.add(study);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_ADD_SUCCESS);
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Study study){
        Boolean add = studyFieldService.update(study);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = studyFieldService.del(ids);
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
