package com.mywork.project.controller;


import com.mywork.project.common.MessageConstant;
import com.mywork.project.common.Result;
import com.mywork.project.common.StatusCode;
import com.mywork.project.pojo.Project;
import com.mywork.project.service.ProjectServiceImpl;
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
@RequestMapping("/project")
public class ProjectController {
    
    @Autowired
    private ProjectServiceImpl projectService;


//    @RequestMapping("/find/{projectId}")
//    public Project queryByUserId(@PathVariable("projectId") Integer userid) {
//        // 根据id查询订单并返回
//        return projectService.findById(userid);
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
        List<Project> projects = projectService.findAll();
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,projects);
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Project project){
        Boolean add = projectService.add(project);
        return new Result(true, StatusCode.OK, MessageConstant.COMMUNITY_ADD_SUCCESS);
    }
    @RequestMapping("/findById/{projectid}")
    public Result findById(@PathVariable("projectid") Integer projectid){
        Project project = projectService.findById(projectid);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,project);
    }

    @RequestMapping("/update")
    public Result update(@RequestBody Project project){
        Boolean update = projectService.update(project);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_SUCCESS);
    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = projectService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Boolean flag = projectService.del(ids);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_DELETE_SUCCESS);
    }
}
