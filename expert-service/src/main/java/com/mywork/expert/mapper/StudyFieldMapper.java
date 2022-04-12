package com.mywork.expert.mapper;


import com.mywork.expert.pojo.Study;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface StudyFieldMapper extends Mapper<Study> {
    @Select("select * from tb_studyfield where userid = #{userid}")
    public List<Study> selectbyid (Integer userid);
}
