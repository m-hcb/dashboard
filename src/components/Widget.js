import { Card, Col } from 'react-bootstrap';
import { Line, Pie} from 'react-chartjs-2';

const Widget = props => {
    const { wType, cols } = props;
    if(wType === 'Numeric'){
        return <NumericWidget {...props}/>
    }else if(wType === 'Chart-Line'){
        return <ChartLineWidget {...props}/>
    }else if(wType === 'Chart-Pie'){
        return <ChartPieWidget {...props}/>
    }else{
        return (
            <Col md={cols}>
                <div style={{ margin: 15, color: 'red' }}>
                    Not Valid Widget
                </div>
            </Col>
        );
    }
}

export default Widget;

const NumericWidget = props => {
    const { wName, cols, data, id } = props;
    return (
        <Col md={cols}>
            <Card style={{ margin: 15 }}>
                <Card.Header as="h5">{wName}</Card.Header>
                <Card.Body>
                    <Card.Title>${ data[`data${id}`] }</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

const ChartLineWidget = props => {
    const { wName, cols, id, data } = props;
    return (
        <Col md={cols}>
            <Card style={{ margin: 15 }}>
                <Card.Header as="h5">{wName}</Card.Header>
                <Card.Body>
                    <Line data={data[`data${id}`]} />
                </Card.Body>
            </Card>
        </Col>
    );
}

const ChartPieWidget = props => {
    const { wName, cols, data, id } = props;
    return (
        <Col md={cols}>
            <Card style={{ margin: 15 }}>
                <Card.Header as="h5">{wName}</Card.Header>
                <Card.Body>
                    <Pie
                        data={data[`data${id}`]}
                    />
                </Card.Body>
            </Card>
        </Col>
    );
}
