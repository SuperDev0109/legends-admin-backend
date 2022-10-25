const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  dashboard_img: {
    type: String,
  },
  dashboard_text: {
    type: String,
  },
  contactus_text: {
    type: String,
  },
  map_text: {
    type: String,
  },
  map_link: {
    type: String,
  },
  token_price: {
    type: String,
  },
  token_percent: {
    type: String,
  },
  collect_text: {
    type: String,
  },
  partnership_img: [
    {
        name: {
            type: String,
        },
        priority: {
            type: Number
        },
        link: {
          type: String
        },
        hash_name: {
          type: String
        }
    }
  ],
  social_links: [
    {
        name: {
            type: String,
        },
        priority: {
            type: Number
        },
        link: {
          type: String
        },
        hash_name: {
          type: String
        }
    }
  ],
  availables: [
    {
        name: {
            type: String,
        },
        priority: {
            type: Number
        },
        link: {
          type: String
        },
        hash_name: {
          type: String
        }
    }
  ],
  collect_img: [
    {
        name: {
            type: String,
        },
        priority: {
            type: Number
        },
        hash_name: {
          type: String
        }
    }
  ],
  teams: [
    {
      priority: {
        type: Number,
      },
      name: {
        type: String,
      },
      role: {
        type: String,
      },
      hash_name: {
        type: String,
      },
      socialLinks: {
        telegram: {
          type: String,
          default: ""
        },
        twitter: {
          type: String,
          default: ""
        },
        discord: {
          type: String,
          default: ""
        },
      }
    }
  ],
  map_img: {
    type: String
  },
  ourteam_text: {
    type: String
  },
  faqs: [
    {
        title: {
            type: String
        },
        comment: {
            type: String
        }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('dashboard', UserSchema);
