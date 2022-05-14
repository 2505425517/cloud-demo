package com.mywork.view.controller;



import com.mywork.view.common.MessageConstant;
import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.common.StatusCode;
import com.mywork.view.pojo.Project;
import com.mywork.view.service.ProjectServiceImpl;
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
@RequestMapping("/project")
public class ProjectController {
    
    @Autowired
    private ProjectServiceImpl projectService;

    @RequestMapping("/findforExamine/{userid}")
    public Result findforExamine(@PathVariable("userid") Integer userid) {
        Result projects = projectService.findForExamine(userid);
        System.out.println(projects);
        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_FIND_BY_ID_SUCCESS,projects);
    }
    @RequestMapping("/search")
    public PageResult search(@RequestBody Map searchMap){
        System.out.println(searchMap);
        PageResult page = projectService.search(searchMap);
        return page;
    }
    @RequestMapping("/findByUserId/{userid}")
    public Result findByUserId(@PathVariable("userid") Integer userid){
        Result page = projectService.findByUserID(userid);
        return page;
    }
    @RequestMapping("/findall")
    public Result findAll() {
        Result page = projectService.findAll();
        return page;
    }
    @RequestMapping("/add")
    public Result add(@RequestBody Project project){
        Result page = projectService.add(project);
        return page;
    }
    @RequestMapping("/findById/{projectid}")
    public Result findById(@PathVariable("projectid") Integer projectid){
        Result page = projectService.findById(projectid);
        return page;
    }

    @RequestMapping("/update")
    public Result update(@RequestBody Project project){
        Result page = projectService.update(project);
        return page;
    }
//    // /community/updateStatus/0/1
//    @RequestMapping("/updateStatus/{status}/{id}")
//    public Result updateStatus(@PathVariable("status") String status,@PathVariable("id") Integer id){
//        Boolean flag = projectService.updateStatus(status,id);
//        return new Result(true,StatusCode.OK,MessageConstant.COMMUNITY_UPDATE_STATUS_SUCCESS);
//    }
    @RequestMapping("/del")
    public Result del(@RequestBody List<Integer> ids){
        Result page = projectService.del(ids);
        return page;
    }
}
