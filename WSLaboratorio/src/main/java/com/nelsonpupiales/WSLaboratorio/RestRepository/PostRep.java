/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nelsonpupiales.WSLaboratorio.RestRepository;

import com.jayway.jsonpath.Criteria;
import com.mongodb.client.result.UpdateResult;
import com.nelsonpupiales.WSLaboratorio.Document.Comentario;
import com.nelsonpupiales.WSLaboratorio.Document.Post;
import java.util.List;
import javax.management.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.CriteriaDefinition;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Nelson Pupiales
 */
@Repository
public class PostRep {
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public Post save(Post post){
        return mongoTemplate.save(post);
    }
    
    public UpdateResult addComments(String idPost, Comentario comentario){
        return mongoTemplate.updateFirst(
                new org.springframework.data.mongodb.core.query.Query().addCriteria((CriteriaDefinition) Criteria.where("id").is(idPost)), 
                new Update().addToSet("comentarios", comentario),
                "Post");
    } 
    
    public List<Post> finaAll(){
        return mongoTemplate.findAll(Post.class);
    }
    
}
