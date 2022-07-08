import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Info() {

    return (
        <div>
            <h2>校歌PORTALについて</h2>
            <div >
                <Paper >
                <Typography variant="headline" component="h3">
                        校歌PORTALとは
                    </Typography>
                    <Typography component="p">
                        全国の学校の校歌の情報をまとめています。
                    </Typography>
                    <Typography variant="headline" component="h3">
                        著作権について
                    </Typography>
                    <Typography component="p">
                        著作権に注意を払い情報を収集しています。本ページ内の校歌の情報はすべて著作者に帰属し
                    </Typography>
                    <Typography variant="headline" component="h3">
                        情報提供のお願い
                    </Typography>
                    <Typography component="p">
                        小学校・中学校・高校問わず校歌の情報を提供いただける方を募集しております。
                    </Typography>
                </Paper>
            </div>
        </div>
    );
}


export default Info;