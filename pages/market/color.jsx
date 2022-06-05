import React from 'react';
import {Card, Space,Input} from 'antd';
import {EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Item from 'antd/lib/list/Item';

const {Meta} = Card;

const { Search } = Input;


const Color = ({data}) => {
    const renderSomeContent = (type, value) => {
        
    }
    const [colorList, setComputersList] = React.useState([]);

    const filtrObj = (item) => {
        console.log(item);
        const newArr = colorList.filter((elem) => elem.group == item.group)
        setComputersList(newArr)
    }




    React.useEffect(() => {
        setComputersList(data)
    }, [])
    return (
        <Space direction={'horizontal'}>
            {colorList.map((item, index) => {
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
                            <PlusOutlined onClick={() => createAnotherObj(item)} key="plus"/>,
                            <DeleteOutlined onClick={() => filtrObj(item)} key="edit"/>,
                            <EditOutlined onClick={() => editObj(index)} key={'edit'}/>
                        ]}
                    >
                        <Meta
                            title={item.names + ' Цвет'}
                        />
                    </Card>
                )
            })}

        </Space>
    );
};

const Poisk = () => (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      /> 
    </Space>
  );

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/hello2`)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}

export default Color;