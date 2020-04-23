import React from 'react'
import Posts from '../../components/Posts/index';
const dataposts=[
  {
    author:{
      name: "Diana Varvadiuk",
      photo: "https://scontent.fiev19-1.fna.fbcdn.net/v/t1.0-9/s960x960/51591236_533123720533624_9069728304918953984_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_oc=AQngdvct5iFBYVgRfTr7kgSfGe-1-XK1LKJK1MFkx178V_TjN4UxpADTs-4cF_QrXN8&_nc_ht=scontent.fiev19-1.fna&_nc_tp=7&oh=766d639cfc3c29c70d50ee4452bd60f3&oe=5EC65E76",
      nickname: "@didi_ivanivna"
    },
    content:"Optimistic Cave is a gypsum cave.",
    image:"http://changeua.com/wp-content/uploads/2015/08/213.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Diana Varvadiuk ",
      photo: "https://scontent.fiev19-1.fna.fbcdn.net/v/t1.0-9/s960x960/51591236_533123720533624_9069728304918953984_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_oc=AQngdvct5iFBYVgRfTr7kgSfGe-1-XK1LKJK1MFkx178V_TjN4UxpADTs-4cF_QrXN8&_nc_ht=scontent.fiev19-1.fna&_nc_tp=7&oh=766d639cfc3c29c70d50ee4452bd60f3&oe=5EC65E76",
      nickname: "@didi_ivanivna"
    },
    content:" Who is The sculptor's house is a wonderful building...",
    image:"http://changeua.com/wp-content/uploads/2015/08/161.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Diana Varvadiuk",
      photo: "https://scontent.fiev19-1.fna.fbcdn.net/v/t1.0-9/s960x960/51591236_533123720533624_9069728304918953984_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_oc=AQngdvct5iFBYVgRfTr7kgSfGe-1-XK1LKJK1MFkx178V_TjN4UxpADTs-4cF_QrXN8&_nc_ht=scontent.fiev19-1.fna&_nc_tp=7&oh=766d639cfc3c29c70d50ee4452bd60f3&oe=5EC65E76",
      nickname: "@didi_ivanivna"
    },
    content:"Mlynki Cave is one of the most famous caves in Ternopil region ",
    image:"http://changeua.com/wp-content/uploads/2015/08/117.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Diana Varvadiuk",
      photo: "https://scontent.fiev19-1.fna.fbcdn.net/v/t1.0-9/s960x960/51591236_533123720533624_9069728304918953984_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_oc=AQngdvct5iFBYVgRfTr7kgSfGe-1-XK1LKJK1MFkx178V_TjN4UxpADTs-4cF_QrXN8&_nc_ht=scontent.fiev19-1.fna&_nc_tp=7&oh=766d639cfc3c29c70d50ee4452bd60f3&oe=5EC65E76",
      nickname: "@didi_ivanivna"
    },
    content:"What could be more amazing than an apartment building without a side wall? ",
    image:"http://changeua.com/wp-content/uploads/2015/08/171.jpg",
    date:"26 февр.",
  },
  
 
]
	export default (props) => {
    return (
      <div >
        {
          dataposts.map((post) => (
            <Posts
              author={{
                  name: post.author.name,
                  photo: post.author.photo,
                  nickname: post.author.nickname
              }}
              content={post.content}
              image={post.image}
              date={post.date}

            />
          ))
        }
      </div>
    )
  }
