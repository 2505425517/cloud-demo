package com.mywork.examine.controller;


import com.mywork.examine.common.MessageConstant;
import com.mywork.examine.common.Result;
import com.mywork.examine.common.StatusCode;
import com.mywork.examine.pojo.Examine;
import com.mywork.examine.service.ExamineServiceImpl;
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
@RequestMapping("/examine")
public class ExamineController {
    
    @Autowired
    private ExamineServiceImpl examineService;


//    @RequestMapping("/find/{projectId}")
//    public Project queryByUserId(@PathVariable("projectId") Integer userid) {
//        // 根据id查询订单并返回
//        return examineService.findById(userid);
//    }

//    public Result find(){
//        List<StudyField> all = studyFieldService.querystudyfieldById(@PathVariable("userId") Long userId);
//        return new Result(false,200,"请求成功adasdasdas",all);
//    }
//    @RequestMapping("/search")
//    public PageResult search(@RequestBody Map searchMap){
//        Page<Expert> page = expertService.search(searchMap);
//        return new PageResult(true, StatusCode.OK, MessageConstant.COMMUNITY_SEARCH_SUCCESS,page.getResult(),page.getTotal());
//    }
//
    @RequestMapping("/findall")
    public Result findAll() {
        // 根据id查询订单并返回
        List<Examine> messages = examineService.findAll();
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,messages);
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Examine examine){
        Boolean add = examineService.add(examine);
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_ADD_SUCCESS);
    }
    @RequestMapping("/findByUserId/{userId}")
    public Result findById(@PathVariable("userId") Integer userid){
        List<Examine> examines = examineService.findByUserId(userid);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,examines);
    }
    @RequestMapping("/findByProjectId/{projectId}")
    public Result findByProjectId(@PathVariable("projectId") Integer projectid){
        List<Examine> examines = examineService.findByProjectId(projectid);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,examines);
    }
    @RequestMapping("/update")
    public Result update(@RequestBody Examine examine){
        Boolean update = examineService.update(examine);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = examineService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = examineService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
