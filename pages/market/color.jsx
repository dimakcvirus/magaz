import React from 'react';
import {Card, Space,Input} from 'antd';
import {EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Item from 'antd/lib/list/Item';

const {Meta} = Card;

const { Search } = Input;


const Color = ({data}) => {
    const [colorList, setComputersList] = React.useState([]);


    const filtrObj = (item) => {

        const newArr = colorList.filter((elem) => elem.group == item.group)
        setComputersList(newArr)
    }
 
    const [value, setValue] = React.useState('')
    const filtSerach = colorList.filter(item => {

            
            return item.names == value 

       
    })

    


    React.useEffect(() => {
        setComputersList(data)
    }, [])
    return (<Space direction={'horizontal'}>
    
            {filtSerach.map((item, index) => {
                return (
                    <Card
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src={item.img}
                            />
                        }
                        actions={[
                            <DeleteOutlined onClick={() => filtrObj(item)} key="edit"/>,
                        ]}
                    >
                        <Meta
                            title={item.names + ' Цвет'}
                        />
                    </Card>
                )
            })}



        <Search
            placeholder="поиск"
            onChange={(event) => setValue(event.target.value)}
    
                style={{
              width: 200,
            }}
        /> 
        </Space>
            
    );




};



export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/hello2`)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}

export default Color;