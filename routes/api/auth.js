const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const md5 = require('md5');
const fs = require('fs');

const Dashboard = require('../../models/Dashboard');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.post('/dashboardAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.dashboard_text = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.dashboard_text);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/contactUsAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.contactus_text = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.contactus_text);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/dashboardImageSaveAction', async (req, res) => {
  try {
    var files = [].concat(req.files['files[]']);
    for(var i = 0; i < files.length; i++){
      var file = files[i];
      // file.name = file.name.replace(/\s/g, '');
      //hash image name
      let tempHashName = md5(Date.now());
      //hash image name end
      //file extension
      let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
      //file extension end

      console.log(tempFileExt);

      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        if(dashboard.dashboard_img) {
          // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
          await fs.unlinkSync('C:/project/Legends/legends-frontend/src/assets/images/upload/main_background.jpg');
        }
        // dashboard.dashboard_img = tempHashName+'.'+tempFileExt;
        // console.log(dashboard.dashboard_img);
        // await dashboard.save();
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

      file.mv('../legends-frontend/src/assets/images/upload/./main_background.jpg', err => {
        if(err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });
    }
    res.json({ status: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/mapImageSaveAction', async (req, res) => {
  try {
    var files = [].concat(req.files['files[]']);
    for(var i = 0; i < files.length; i++){
      var file = files[i];
      // file.name = file.name.replace(/\s/g, '');
      //hash image name
      let tempHashName = md5(Date.now());
      //hash image name end
      //file extension
      let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
      //file extension end

      console.log(tempFileExt);

      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        if(dashboard.map_img) {
          // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.map_img}`);
          await fs.unlinkSync('C:/project/Legends/legends-frontend/src/assets/images/upload/roadmap.jpg');
        }
        // dashboard.map_img = tempHashName+'.'+tempFileExt;
        // console.log(dashboard.map_img);
        // await dashboard.save();
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

      file.mv('../legends-frontend/src/assets/images/upload/./roadmap.jpg', err => {
        if(err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });
    }
    res.json({ status: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/mapAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.map_text = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.map_text);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/mapLinkAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.map_link = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.map_link);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/tokenPriceAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.token_price = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.token_price);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/tokenPercentAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.token_percent = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.token_percent);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/collectAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.collect_text = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.collect_text);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/ourteamAction', async (req, res) => {
  switch(req.body.type) {
    case 'save':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.ourteam_text = req.body.data;
        dashboard.save();
        res.json(dashboard);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.ourteam_text);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/faqsAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.faqs.push({
          title: req.body.title,
          comment: req.body.comment
        });
        dashboard.save();
        res.json(dashboard.faqs);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      try {
        // console.log(req.body.id, req.body.title, req.body.comment, req.body.type);
        const data = await Dashboard.find();
        let dashboard = data[0];
        var updatedFaqIndex = -1;
        // console.log(dashboard.faqs);
        dashboard.faqs.forEach((item, index) => {
          if(item._id == req.body.id) {
            updatedFaqIndex = index;
          }
        })
        if(updatedFaqIndex > -1) {
          dashboard.faqs[updatedFaqIndex].title = req.body.title;
          dashboard.faqs[updatedFaqIndex].comment = req.body.comment;
        }
        console.log(dashboard.faqs[updatedFaqIndex]);
        dashboard.save();
        res.json(dashboard.faqs);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        dashboard.faqs = dashboard.faqs.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.faqs);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.faqs);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/partnershipAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        var files = [].concat(req.files['files[]']);
        for(var i = 0; i < files.length; i++){
          var file = files[i];
          // file.name = file.name.replace(/\s/g, '');
          //hash image name
          let tempHashName = md5(Date.now());
          //hash image name end
          //file extension
          let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
          //file extension end
    
          console.log(tempFileExt);
    
          try {
            dashboard.partnership_img.push({
              name: req.body.name,
              priority: req.body.priority,
              link: req.body.link,
              hash_name: tempHashName+'.'+tempFileExt
            });
            console.log(dashboard.map_img);
            await dashboard.save();
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
    
          file.mv(`../legends-frontend/src/assets/images/upload/./${tempHashName}.${tempFileExt}`, err => {
            if(err) {
              console.error(err);
              return res.status(500).send(err);
            }
          });
        }
        res.json(dashboard.partnership_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        if(req.files) {
          var files = [].concat(req.files['files[]']);
          for(var i = 0; i < files.length; i++){
            var file = files[i];
            // file.name = file.name.replace(/\s/g, '');
            //hash image name
            let tempHashName = md5(Date.now());
            //hash image name end
            //file extension
            let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
            //file extension end
      
            console.log(tempFileExt);
      
            try {
              var updatedIndex = -1;
              dashboard.partnership_img.forEach((item, index) => {
                console.log(item);
                if(item._id.toString() === req.body.id.toString()) {
                  updatedIndex = index;
                }
              })
              if(dashboard.partnership_img[updatedIndex].hash_name) {
                // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
                await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/${dashboard.partnership_img[updatedIndex].hash_name}`);
              }
              if(updatedIndex > -1){
                dashboard.partnership_img[updatedIndex].name = req.body.name;
                dashboard.partnership_img[updatedIndex].priority = req.body.priority;
                dashboard.partnership_img[updatedIndex].link = req.body.link;
                dashboard.partnership_img[updatedIndex].hash_name = tempHashName+'.'+tempFileExt;
              }
             

              await dashboard.save();
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
      
            file.mv(`../legends-frontend/src/assets/images/upload/./${tempHashName}.${tempFileExt}`, err => {
              if(err) {
                console.error(err);
                return res.status(500).send(err);
              }
            });
          }
        } else {
          try {
            var updatedIndex = -1;
            dashboard.partnership_img.forEach((item, index) => {
              if(item._id.toString() === req.body.id.toString()) {
                updatedIndex = index;
              }
            })
            if(updatedIndex > -1) {
              dashboard.partnership_img[updatedIndex].name = req.body.name;
              dashboard.partnership_img[updatedIndex].priority = req.body.priority;
              dashboard.partnership_img[updatedIndex].link = req.body.link;
            }
            await dashboard.save();
          } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
        }
        res.json(dashboard.partnership_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        var deletedIndex = -1;
        dashboard.partnership_img.forEach((item, index) => {
          if(item._id.toString() === req.body.id.toString()) {
            deletedIndex = index;
          }
        })
        if(deletedIndex > -1) {
          await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/${dashboard.partnership_img[deletedIndex].hash_name}`);
        }
        dashboard.partnership_img = dashboard.partnership_img.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.partnership_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.partnership_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/socialLinkAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        var files = [].concat(req.files['files[]']);
        for(var i = 0; i < files.length; i++){
          var file = files[i];
          // file.name = file.name.replace(/\s/g, '');
          //hash image name
          let tempHashName = md5(Date.now());
          //hash image name end
          //file extension
          let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
          //file extension end
    
          console.log(tempFileExt);
    
          try {
            dashboard.social_links.push({
              name: req.body.name,
              priority: req.body.priority,
              link: req.body.link,
              hash_name: tempHashName+'.'+tempFileExt
            });
            console.log(dashboard.map_img);
            await dashboard.save();
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
    
          file.mv(`../legends-frontend/src/assets/images/upload/social_links/./${tempHashName}.${tempFileExt}`, err => {
            if(err) {
              console.error(err);
              return res.status(500).send(err);
            }
          });
        }
        res.json(dashboard.social_links.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        if(req.files) {
          var files = [].concat(req.files['files[]']);
          for(var i = 0; i < files.length; i++){
            var file = files[i];
            // file.name = file.name.replace(/\s/g, '');
            //hash image name
            let tempHashName = md5(Date.now());
            //hash image name end
            //file extension
            let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
            //file extension end
      
            console.log(tempFileExt);
      
            try {
              var updatedIndex = -1;
              dashboard.social_links.forEach((item, index) => {
                console.log(item);
                if(item._id.toString() === req.body.id.toString()) {
                  updatedIndex = index;
                }
              })
              if(dashboard.social_links[updatedIndex].hash_name) {
                // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
                await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/social_links/${dashboard.social_links[updatedIndex].hash_name}`);
              }
              if(updatedIndex > -1){
                dashboard.social_links[updatedIndex].name = req.body.name;
                dashboard.social_links[updatedIndex].priority = req.body.priority;
                dashboard.social_links[updatedIndex].link = req.body.link;
                dashboard.social_links[updatedIndex].hash_name = tempHashName+'.'+tempFileExt;
              }
             

              await dashboard.save();
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
      
            file.mv(`../legends-frontend/src/assets/images/upload/social_links/./${tempHashName}.${tempFileExt}`, err => {
              if(err) {
                console.error(err);
                return res.status(500).send(err);
              }
            });
          }
        } else {
          try {
            var updatedIndex = -1;
            dashboard.social_links.forEach((item, index) => {
              if(item._id.toString() === req.body.id.toString()) {
                updatedIndex = index;
              }
            })
            if(updatedIndex > -1) {
              dashboard.social_links[updatedIndex].name = req.body.name;
              dashboard.social_links[updatedIndex].priority = req.body.priority;
              dashboard.social_links[updatedIndex].link = req.body.link;
            }
            await dashboard.save();
          } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
        }
        res.json(dashboard.social_links.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        var deletedIndex = -1;
        dashboard.social_links.forEach((item, index) => {
          if(item._id.toString() === req.body.id.toString()) {
            deletedIndex = index;
          }
        })
        if(deletedIndex > -1) {
          await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/social_links/${dashboard.social_links[deletedIndex].hash_name}`);
        }
        dashboard.social_links = dashboard.social_links.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.social_links.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.social_links.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/availableAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        var files = [].concat(req.files['files[]']);
        for(var i = 0; i < files.length; i++){
          var file = files[i];
          // file.name = file.name.replace(/\s/g, '');
          //hash image name
          let tempHashName = md5(Date.now());
          //hash image name end
          //file extension
          let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
          //file extension end
    
          console.log(tempFileExt);
    
          try {
            dashboard.availables.push({
              name: req.body.name,
              priority: req.body.priority,
              link: req.body.link,
              hash_name: tempHashName+'.'+tempFileExt
            });
            await dashboard.save();
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
    
          file.mv(`../legends-frontend/src/assets/images/upload/availables/./${tempHashName}.${tempFileExt}`, err => {
            if(err) {
              console.error(err);
              return res.status(500).send(err);
            }
          });
        }
        res.json(dashboard.availables.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        if(req.files) {
          var files = [].concat(req.files['files[]']);
          for(var i = 0; i < files.length; i++){
            var file = files[i];
            // file.name = file.name.replace(/\s/g, '');
            //hash image name
            let tempHashName = md5(Date.now());
            //hash image name end
            //file extension
            let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
            //file extension end
      
            console.log(tempFileExt);
      
            try {
              var updatedIndex = -1;
              dashboard.availables.forEach((item, index) => {
                console.log(item);
                if(item._id.toString() === req.body.id.toString()) {
                  updatedIndex = index;
                }
              })
              if(dashboard.availables[updatedIndex].hash_name) {
                // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
                await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/availables/${dashboard.availables[updatedIndex].hash_name}`);
              }
              if(updatedIndex > -1){
                dashboard.availables[updatedIndex].name = req.body.name;
                dashboard.availables[updatedIndex].priority = req.body.priority;
                dashboard.availables[updatedIndex].link = req.body.link;
                dashboard.availables[updatedIndex].hash_name = tempHashName+'.'+tempFileExt;
              }
             

              await dashboard.save();
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
      
            file.mv(`../legends-frontend/src/assets/images/upload/availables/./${tempHashName}.${tempFileExt}`, err => {
              if(err) {
                console.error(err);
                return res.status(500).send(err);
              }
            });
          }
        } else {
          try {
            var updatedIndex = -1;
            dashboard.availables.forEach((item, index) => {
              if(item._id.toString() === req.body.id.toString()) {
                updatedIndex = index;
              }
            })
            if(updatedIndex > -1) {
              dashboard.availables[updatedIndex].name = req.body.name;
              dashboard.availables[updatedIndex].priority = req.body.priority;
              dashboard.availables[updatedIndex].link = req.body.link;
            }
            await dashboard.save();
          } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
        }
        res.json(dashboard.availables.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        var deletedIndex = -1;
        dashboard.availables.forEach((item, index) => {
          if(item._id.toString() === req.body.id.toString()) {
            deletedIndex = index;
          }
        })
        if(deletedIndex > -1) {
          await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/availables/${dashboard.availables[deletedIndex].hash_name}`);
        }
        dashboard.availables = dashboard.availables.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.availables.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.availables.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/collectImgAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        var files = [].concat(req.files['files[]']);
        for(var i = 0; i < files.length; i++){
          var file = files[i];
          // file.name = file.name.replace(/\s/g, '');
          //hash image name
          let tempHashName = md5(Date.now());
          //hash image name end
          //file extension
          let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
          //file extension end
    
          console.log(tempFileExt);
    
          try {
            dashboard.collect_img.push({
              name: req.body.name,
              priority: req.body.priority,
              hash_name: tempHashName+'.'+tempFileExt
            });
            await dashboard.save();
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
    
          file.mv(`../legends-frontend/src/assets/images/upload/card-slider/./${tempHashName}.${tempFileExt}`, err => {
            if(err) {
              console.error(err);
              return res.status(500).send(err);
            }
          });
        }
        res.json(dashboard.collect_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        if(req.files) {
          var files = [].concat(req.files['files[]']);
          for(var i = 0; i < files.length; i++){
            var file = files[i];
            // file.name = file.name.replace(/\s/g, '');
            //hash image name
            let tempHashName = md5(Date.now());
            //hash image name end
            //file extension
            let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
            //file extension end
      
            console.log(tempFileExt);
      
            try {
              var updatedIndex = -1;
              dashboard.collect_img.forEach((item, index) => {
                console.log(item);
                if(item._id.toString() === req.body.id.toString()) {
                  updatedIndex = index;
                }
              })
              if(dashboard.collect_img[updatedIndex].hash_name) {
                // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
                await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/card-slider/${dashboard.collect_img[updatedIndex].hash_name}`);
              }
              if(updatedIndex > -1){
                dashboard.collect_img[updatedIndex].name = req.body.name;
                dashboard.collect_img[updatedIndex].priority = req.body.priority;
                dashboard.collect_img[updatedIndex].hash_name = tempHashName+'.'+tempFileExt;
              }
             

              await dashboard.save();
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
      
            file.mv(`../legends-frontend/src/assets/images/upload/card-slider/./${tempHashName}.${tempFileExt}`, err => {
              if(err) {
                console.error(err);
                return res.status(500).send(err);
              }
            });
          }
        } else {
          try {
            var updatedIndex = -1;
            dashboard.collect_img.forEach((item, index) => {
              if(item._id.toString() === req.body.id.toString()) {
                updatedIndex = index;
              }
            })
            if(updatedIndex > -1) {
              dashboard.collect_img[updatedIndex].name = req.body.name;
              dashboard.collect_img[updatedIndex].priority = req.body.priority;
            }
            await dashboard.save();
          } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
        }
        res.json(dashboard.collect_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        var deletedIndex = -1;
        dashboard.collect_img.forEach((item, index) => {
          if(item._id.toString() === req.body.id.toString()) {
            deletedIndex = index;
          }
        })
        if(deletedIndex > -1) {
          await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/card-slider/${dashboard.collect_img[deletedIndex].hash_name}`);
        }
        dashboard.collect_img = dashboard.collect_img.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.collect_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.collect_img.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/teamAction', async (req, res) => {
  switch(req.body.type) {
    case 'create':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        var files = [].concat(req.files['files[]']);
        for(var i = 0; i < files.length; i++){
          var file = files[i];
          // file.name = file.name.replace(/\s/g, '');
          //hash image name
          let tempHashName = md5(Date.now());
          //hash image name end
          //file extension
          let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
          //file extension end
    
          console.log(tempFileExt);
    
          try {
            dashboard.teams.push({
              name: req.body.name,
              priority: req.body.priority,
              role: req.body.role,
              hash_name: tempHashName+'.'+tempFileExt
            });
            console.log(dashboard.map_img);
            await dashboard.save();
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
    
          file.mv(`../legends-frontend/src/assets/images/upload/./teams/${tempHashName}.${tempFileExt}`, err => {
            if(err) {
              console.error(err);
              return res.status(500).send(err);
            }
          });
        }
        res.json(dashboard.teams.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'update':
      var data = await Dashboard.find();
      var dashboard = data[0];
      try {
        if(req.files) {
          var files = [].concat(req.files['files[]']);
          for(var i = 0; i < files.length; i++){
            var file = files[i];
            // file.name = file.name.replace(/\s/g, '');
            //hash image name
            let tempHashName = md5(Date.now());
            //hash image name end
            //file extension
            let tempFileExt = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length) || file.name;
            //file extension end
      
            console.log(tempFileExt);
      
            try {
              var updatedIndex = -1;
              dashboard.teams.forEach((item, index) => {
                console.log(item);
                if(item._id.toString() === req.body.id.toString()) {
                  updatedIndex = index;
                }
              })
              if(dashboard.teams[updatedIndex].hash_name) {
                // await fs.unlinkSync(`D:/work/2022.10.6 (Legends)/legends-frontend/src/assets/images/upload/${dashboard.dashboard_img}`);
                await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/teams/${dashboard.teams[updatedIndex].hash_name}`);
              }
              if(updatedIndex > -1){
                dashboard.teams[updatedIndex].name = req.body.name;
                dashboard.teams[updatedIndex].priority = req.body.priority;
                dashboard.teams[updatedIndex].role = req.body.role;
                dashboard.teams[updatedIndex].hash_name = tempHashName+'.'+tempFileExt;
              }
             
              await dashboard.save();
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
      
            file.mv(`../legends-frontend/src/assets/images/upload/./teams/${tempHashName}.${tempFileExt}`, err => {
              if(err) {
                console.error(err);
                return res.status(500).send(err);
              }
            });
          }
        } else {
          try {
            var updatedIndex = -1;
            dashboard.teams.forEach((item, index) => {
              if(item._id.toString() === req.body.id.toString()) {
                updatedIndex = index;
              }
            })
            if(updatedIndex > -1) {
              dashboard.teams[updatedIndex].name = req.body.name;
              dashboard.teams[updatedIndex].priority = req.body.priority;
              dashboard.teams[updatedIndex].role = req.body.role;
            }
            await dashboard.save();
          } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
        }
        res.json(dashboard.teams.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'delete':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        var deletedIndex = -1;
        dashboard.teams.forEach((item, index) => {
          if(item._id.toString() === req.body.id.toString()) {
            deletedIndex = index;
          }
        })
        if(deletedIndex > -1) {
          await fs.unlinkSync(`C:/project/Legends/legends-frontend/src/assets/images/upload/teams/${dashboard.teams[deletedIndex].hash_name}`);
        }
        dashboard.teams = dashboard.teams.filter(
          ({ _id }) => _id.toString() !== req.body.id
        );
        dashboard.save();
        res.json(dashboard.teams.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'get':
      try {
        const data = await Dashboard.find();
        let dashboard = data[0];
        res.json(dashboard.teams.sort(compare));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      break;
  }
});

router.post('/socialAction', async (req, res) => {
  var data = await Dashboard.find();
  var dashboard = data[0];
  try {
    var updatedIndex = -1;
    dashboard.teams.forEach((item, index) => {
      if(item._id.toString() === req.body.id.toString()) {
        updatedIndex = index;
      }
    })
    if(updatedIndex > -1) {
      dashboard.teams[updatedIndex].socialLinks.twitter = req.body.twitter;
      dashboard.teams[updatedIndex].socialLinks.telegram = req.body.telegram;
    }
    await dashboard.save();
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.json(dashboard.teams.sort(compare));
});

function compare( a, b ) {
  if ( a.priority < b.priority ){
    return -1;
  }
  if ( a.priority > b.priority ){
    return 1;
  }
  return 0;
}

// manual create the dashboard table
    // let dashboard = new Dashboard({
    //   dashboard_img: '',
    //   dashboard_text: '',
    //   map_text: '',
    //   collect_text: '',
    //   partnership_img: [
    //     {
    //       name: 'www',
    //       priority: 1
    //     }
    //   ],
    //   map_img: '',
    //   ourteam_text: '',
    //   faqs: [
    //     {
    //       title: 'sfd',
    //       comment: 'sdfsdfsd'
    //     }
    //   ]
    // });
    // await dashboard.save();
// manual create the dashboard table end

module.exports = router;
