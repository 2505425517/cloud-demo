package com.mywork.project.service;


import com.mywork.project.mapper.ProjectMapper;
import com.mywork.project.pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public List<Project> findAll() {
        return projectMapper.selectAll();
    }
    @Override
    public Boolean add(Project project) {
        int row = projectMapper.insert(project);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public Project findById(Integer id) {
        return projectMapper.selectByPrimaryKey(id);
    }

    @Override
    public Boolean update(Project project) {
        int row = projectMapper.updateByPrimaryKeySelective(project);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }
//
//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        Project Project = new Project();
//        Project.setId(id);
//        Project.setStatus(status);
//        int row = projectMapper.updateByPrimaryKeySelective(Project);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }

    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            projectMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
