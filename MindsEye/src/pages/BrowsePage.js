import React, {Component} from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

// Our built buttons
import { Podcast } from '../components/Podcast';
import { LowButtons } from '../components/LowerButtons';

// For podcast Listening

class curPodcast {
  state = {
    url: null,   //Podcast Link
    uri: null,   //Image Link
    title: null, //Title of podcast
    author: null //Author
  }
  
  curPodcast(){
    this.state = {
      url: null,   //Podcast Link
      uri: null,   //Image Link
      title: null, //Title of podcast
      author: null //Author
    }
  }
  
  curPodcast(url, uri, title, author){
    this.state = {
      url: null,   //Podcast Link
      uri: null,   //Image Link
      title: null, //Title of podcast
      author: null //Author
    }
  }
}

export class BrowsePage extends Component {
  render(){
    
    var currentPodcast = new curPodcast();

    function selectPodcast(url, navigation){
      navigation.navigate('Podcast', {url: url});
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scroll}>
            <Podcast onPress={(url="http://mindseyeradio.streamguys1.com/USAToday.mp3", ) => selectPodcast(url, this.props.navigation)}
              title="USA Today" 
              author="USA Today (repeat from yesterday)"
              uri="data:image/png;base64,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"/>
            <Podcast onPress={(url="http://mindseyeradio.streamguys1.com/BlindnessAndDisabilityNewsHour.mp3") => selectPodcast(url, this.props.navigation)} 
              title="Blindness And Disability News Hour" 
              author="Issues affecting our listeners - varied sources (Repeat)"
              uri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADICAMAAAAZQmeXAAAAkFBMVEX///8hOG8dNW0LK2gAJWYxR3oAGGCcorY1R3fFyNQDKWj19/kaM2wNLmwAJmYAI2UVMGulrL/Lz9pvepsAIGTf4unl6O3v8fVRYIm6v86Hj6jj5uwAHGKqsMOSmrI4THzS1t9dapBkcZQoP3RWZY13gZ8ACVxHV4OLk6y+w9Fjb5SzuMgAAFoAEF6AiaRKWYTrQZhmAAAOPklEQVR4nO2da3uiPBCGFahWoICK0loPtOqqdbf9///uVUmAzExM4PVAc/l82S0K5oYcZiaT0GpVVTr/eqW00taHtr6k+qyoYUmT/rgy9VG956nt+1Yh/wK66MXUiuzOx3v1Z76J/bYJiuy0Ivpsagb5QVZY7cn3Ovcu8QXlbyqxv1j3LvAlFQ+q1Pjg3sW9qKLvCuyvxjT2k6wqld6+d2kvrKU+uufeu7CX1oP9wf5gf7A/2B/sEnbrxVbJvbQCuRyowBE+xlZpfXbryUsup/HVlVyUXf/cRqgNXTH9Ux/sD/YH+/WKeRU92B/sD3ZtPdgf7A/26xXzKnqwP9grssP4vDHsg31XpblvJHvXil1lDAZOyxjBniyCOhOsjWM/hn/OfU6xP0U1yKXsfaauVypVlx2cZX/v+hIdThrx776xkz1+oMsvN+MHclRvv34+BQftp/VbSyKCfVhzjlHCzlvPdFIce/+XHQzY9N9nLGlWf5NW+scWvtvq/WMf/hkxUDe7mtvh7JN/QcTArCiI57rso7rJFBL2vBJNi2Sm95Cdssj+Hspq2vRAM+X/ZyfP+bNx99mBccyuxu7OqA2enrsk80kw+7ZejVezR5/12BesiDF7zCs+vvBkgYHD/h6e/kxDlBfgu1QSGWbf1E0kUbG3p2ktdv5h0Mu+HMIfnDEjyz51AF5EAERUXgFmr0muwe6/1mLvshps90/fHcX5p27Wvr/Z2c7p5qzJ7irc35e9HffqsPfYBAqr4rPClHay7KAPVsfjY6tOeHdlBa7r5Nf1Fzrsi6vV+aIAcnaQ8Xjsucess/N/Tt9dFxfMKnnriZX41Bn22WO3/H2SjNYO/y7vLc6yr+pmEKnZ285exQ5ychdJqYwBLLG/Oh7w2MWyBDmeAOWkWS3hs252twWF2YdXZLfa59ktMt2HP434eCOSaflyR3uJdwBZm2BA/Mr5vSiNMnL2ybXGuKPcbg123peFaato/dndOFbkHTviHvvChFX5PEtyHxyqvx/ZAS4dZp/XTR3TYW87XnX2PevdgmOLEYp3sm74OBAOSuztgGVJjv7Yy83HetudabD3r8puf1dnT1mlto+2qZDQGK1bRed3HBMOozv/LJhnI6BHXVLCvocpBZFkbh+lHuiwtzvjyuw8QHRqssLlTgPHT3Y3WF+yzIHs6c88lYKT7ANHPBANd2+k9oBKj/0EIGdPvJK4C8qGXev5UIV5p579Ex6+we6M/yVc6nTIjttreYYwZk9D8UA0kZyqGa+DXWecnh3fo7LYsPDJPo48btlErKIfTDne8dvb03d3YvGtKF52JdWe8ONi8QDzEC7GfrRsNe063gTy3mzMG7fLSnnoAvizCpifvoRElu3gsZ1mLw+gvKwXYeedVLyrys5HsYMN+2yx87KC+x95/8QNtwHhgwcLKoBDxC4Au0VYwnXYeTU9dlAV2fnX3ZmX3YVDO2Tt4KW1ZZUi4DW7O8VXitoEPMH+Qhfg/7LHY5/9lrNPqrG3uG22HWTsh/rN2kE8/sw+LC356BKreCgnlmB/AocsSVdRkX3q9VnVtdoj/j9N9g3j+2LE0/fWILt97o4Vt9wtpc8OcsiINk+w/4C7ZkuCnVXZk/zHoiEPpiF2qyyfzxYwq9baMHf1Jf/1aM1KK/oq+3YIR+BIh/0TnBVLFg1WZ9/xIYTfXcy+EMWu0ec/xZ7x0UbITZpMPKrD1fu0HSGC46B4LcG+huzY863JzutucYqWXdeCNsfpGX+LxcRPyOt9L0uhu5P9q2KfAIMe3tH/wZ4C20GXPRFtzZND9ybkw2buLFLvNf8WjtwQ7F3IToS6arLD9qTL3hLjj+GRcyzUBRbU4UUb53V1nsO/aLBDZ8bF3l9tdmA0arN/lBsL4xQMOBbMG2/XH5ulHwVhfmredXc02HcgudqWTGvUYQdRVG12wWtnnEIdYg9o/CfyT2aEk89G5I/S1mAfQGdGsl6wFnsitlJddqFxM8tdCDScuoCS++7mDZX7pRZKLSDYkTODI1312cUnqM0ulIl16ULnz0L1+UhSmHm8+2I+7nl25MysLsnesku/iMb35UxUn3vf5QjlEv9+ftPyaGPAeylOiJsuwe6B9i5bHF2TvbyCGNs2YFXJlLe30qxBXg8XRQd48OcyFQ02M2KT1/z3kZlCzb+DY7KcgprsZX9BOS+TB07KMxJ9dmxbNJ/ioZZiVi/DySo3bognSLHDmRmfdmbqsveKtqvPXurYWLcmDEhBbrD2S9UqioqaEe+02OHa7vCy7KXr67OXoogRL8646ATCokKjuE12EhGBodi/APuUdmZqsxeWrT570QGXKm8RaShMmVZK5U74kV7sApUkr2QXYi+sEn32lsULymKSwmnCT88wvO9S/hjFvtVzZuqz56Z4Bfbcqi2adtEJiD7azrEFKj/ckCEIih05M3SmkiZ7J8xWJf4t/f53JzsW8yB0By1izNT5hqeEf4sWmP5lX/snBmW8rR/a0WmHID9y44XEGaPYNZ0ZTfYBU7nyePwgM13SgUx5XR2DU07q8WPouabd4evi6WmxGfYl4QeaXdOZMTKXWNOZMZJdc2bGSPYEPPfcWBZlJLsHZieoHKWWoezQLMRe/0lmskNnxiFPNZMdzsxMSWfGTPYPwB6TachmssOZGdqZMZNdz5kxk13PmTGTfQao8giZIDPZ9ZwZM9lRmhnpzJjJrufMmMk+hrMTZJqZmexepEOlw570PxbPDdDPGofnJeth4VE0ba/Jvo1dYZ/uu8mPwiVKrKXZYXwfTdvrsa+atHmv9Q+GLGl2mBM0pWK8SvbPhm3u9w88eZodOTNUrFPF3iNyO+8qOLtPs2s5Myp2WHnuL5A1RbPDNTMOlYCvYB8DA6kBAoFHyb4HcCExNbOhYIeGcQMEKj3NjpwZKvlewb5vILuYgEizazkzhj53LWdGwf4OnIIGCNjmNPsIslNpZqp+/rlxb2QIxDgEzQ77aOunhaVi3zeto4cp9DS7B9mpnD+lXfcqyyi4kzog9CbZ1wisD8S5qDrs3qJJb2WwprDDlrDDwy4xO6Hhxw2n1OYT95Dv2shGkbAvgD0aEM6Mjv+efj85nQYoeu3jpydhh85MSDgzZsZt0GIU0pkxlR3OzDjEzIyp7DrOjKnsMM2Mmpkxlb0HBnjKmTGVHTkzaGGduexwZgYvNjGXHa2ZIZwZU9lbHTWXsewg6EKlmRnLDmdmiDUzeuyjQa8BSjX3uzgJppkRmx5qsCdbP5Zkxt9WYWeD82Zk7GgDAJxmpmZPXbshLuyh4k5RVrCMXWNmRsk+mDaG/CgbrpCTsaMNAPD8tYrda9rrY10QbZaxazgzKnZ4++4vsCxUxq7hzCjYPb9hj11YXnaOXcOZUbDDvS0aILAQQLr/vNqZUbC/NXBOSrTQZOwazoyhc5GEM4PTzBTsg+bV+ePmfxrsLTgzg9fMqPq6xnXzsOFK2S3xA2JWSjXGSRe53k3HLRN12OGamRfkzKjYx02r9BHos6TscAOAGHlCSpuWWIx9T/kReHxSdrUzo/ZlZv8alGrlLuHTk7KrnRkNH3b0Ggbqd7XcQG4IbLqz7GpnRit2Md73lS/puYH6A2IiWcqudmaMjVlpODPmsqM0M9RezGVXOzPmsqt3MzOXPYGOHHJmzGWHGwBgZ8ZcdrSbGZqZMZgdOjMhPNVgdrQBADSHDWZXrpkxmB3tZgbXjeiwj7urzS3W/i1et+kF2ZVpZhrsk9C+0dpA344/5G9TqcoO3zODnBk1++tNQ7WRdfbNmFXYlWtmlOwfN45W+mgYrsuOnBn4rhUV++7m8ToiPlGPXZlmpmKHudg3kF2pycvZ4Vof5Mw0cK2QQ6z0rsOONgCAaWYNnI+TbZlelT2BGwDA2YkGzsdR6Z912PG6kWrs91gbiPrjuuzwPTNwAwBVe7/DEjHZ6yEqs6s2AGhgP+9Usm7OsKucGeXawNuP75Wa+zl21cxM49YG+ni+tC472gAAODNNWxsY2dJdeCuzo5kZsD2x1tpA+zbZVpYfxT+Sdz/VYVc5M1prAyeb9ssN5C/Wkrcf1WNXzcwYHLdROjO/nh02x5LhCjcAgNsT/3528NhL5R+D1Eq4PfFvZ0ezL6U8a8RmgXN/OTt0VK1yvYajM5id+O3sZzc0gf0geNfKb2dHY3jZ+YfOTCgaD7+dHU5ACIFotAFAKpybQHbZS3SbKZTfL+DBDQBAhB6NgbKXJzdTMxhb6ZSbNDTogXGDPpa9NLuR8mBvJlZbFG0U98aBJ1eMjt9ZMG8U7FsFU27EnnANh0DJK3iaqS+0n2QoOkNo08WgmIvdonDclNylvpHqPePIAsg0hi8Ua1vuPIuIDTbovv2aIe59tolxUAF6anD0P1Z7dzP8/ii/azhn30y+uSbbOZHTSmg22+/fkHY99G6ldETp/X1MKkHyvCQZv4/eup/PoUsFUcG6gvLL6Qr5UUTHYqyokCSbmVJACa3lDWNCoeNQ5waui376WCTXiQNbsskU3twAWjfmKkZhn13TtqC7lqg9Le4wv3AXdYgQ71vT1vtcRwFplq0at9DrCoqoLSnxO8VMlN+WzOfsmrXQ6wry29JJjbnhTT56OjN5+200fPB6dgJz3rSN5C8nv6PK0NnHZvb2VrhRT90mq9g8I8cPl3oRh97GrGfv2+FKPxlvMIzCG82mX1m+HcQ/3Wqz9V5vvmpPSWcydzGL/2RyAifk4g5p4JZ91IByObELela++Bedt+4fvnX0Y93Vdlcx45orGRNBhBT9Z5SeNBikhdiLoXdvb0VQotd72+9nQkCj2513xT9P2k7mJW23E67v9XAyKf/1tXoltPpaT+b7wZnn/R87m6V5ecnH9AAAAABJRU5ErkJggg=="/>
          
          <Podcast onPress={(url="http://mindseyeradio.streamguys1.com/frontpage.mp3") => selectPodcast(url, this.props.navigation)} 
              title="Front Page- St. Louis Post Dispatch and Belleville N"    
              author="St. Louis Post Dispatch and Belleville News Democrat Front Page"
              uri="https://images-na.ssl-images-amazon.com/images/I/31Rv9MJvzzL._SY445_.jpg" />
            <Podcast onPress={(url="http://mindseyeradio.streamguys1.com/editorials.mp3") => selectPodcast(url, this.props.navigation)} 
              title="Editorials- St. Louis Post Dispatch and Belleville N" 
              author="St. Louis Post Dispatch and Belleville News Democrat Editorials"
              uri="https://images-na.ssl-images-amazon.com/images/I/31Rv9MJvzzL._SY445_.jpg" />
            <Podcast onPress={(url="http://mindseyeradio.streamguys1.com/PetHour.mp3") => selectPodcast(url, this.props.navigation)} 
              title="Pet Hour" 
              author="Bark, Dog Fancy, and Cat Fancy"
              uri="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv67s0HzDE5wsomacfTdoAWdQmvHApDmSoq8Miz6JFu324h3sY" />
          </ScrollView>
          <View style={styles.footer}>
            <LowButtons 
              livestreamOnPress={() => this.props.navigation.navigate('Livestream')}
              browseOnPress={() => this.props.navigation.navigate('Browse')}
              searchOnPress={() => this.props.navigation.navigate('Podcast')}
              libraryOnPress={() => this.props.navigation.navigate('Library')}
              settingsOnPress={() => this.props.navigation.navigate('Settings')}
            />
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  footer: {
    // flex: 1
  },
  scroll: {
    width: "100%",
    height: "80%"
    // flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
