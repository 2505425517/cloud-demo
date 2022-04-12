package com.mywork.expert.mapper;


import com.mywork.expert.pojo.Career;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface ExpertCareerMapper extends Mapper<Career> {

    @Select("select * from tb_career where userid = #{userid}")
    public List<Career> selectbyid (Integer userid);

}