import React from 'react';
import { Button } from 'antd';
import {Card, Space,Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const {Meta} = Card;
const { Search } = Input;
    


const Kraski = ({baza}) => {
    
    const filtrObj = (item) => {
        const newArr = colorList.filter((obekt) => item.group == obekt.group)
        setColorList(newArr)
    }

    const [colorList, setColorList] = React.useState([]);
    React.useEffect(() => {setColorList(baza)}, [])


    const [ value, setValue] = React.useState('')
    const filterSearch = colorList.filter(item => {
        item.names == value
        
    })

    return(
        <Space direction={'horizontal'}>
        {colorList.map((item) =>{
    console.log(item)
        return  (
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={item.img}
                />
              }
              actions={[
                <PlusOutlined onClick={() => filtrObj(item) } key="setting" />,
              ]}
            >
              <Meta
                title={item.names}
              />
            </Card>
            
          )

    })}
        <Search
            placeholder="поиск"
            onClick={(event) => setValue(event.target.value)}
    
                style={{
              width: 200,
            }}
        /> 

        </Space>


        

 
 

);
};







export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/hello2`)
    const baza = await res.json()

    // Pass data to the page via props
    return {props: {baza}}
}

export default Kraski;