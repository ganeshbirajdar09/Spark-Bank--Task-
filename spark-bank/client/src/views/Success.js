import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Success.css";
const Success = () => {
  return (
    // <div>
    //   <Card className="bg-dark card">
    //     <CardHeader
    //       className="bg-dark text-success min"
    //       align="center"
    //       title="Transaction Successfull"
    //       subheader="Verified Transaction"
    //     />
    //     <CardContent className="bg-dark">
    //       <Typography className="success" align="center" variant="h5">
    //         {/* Transaction Successfull */}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </div>
    <div class="card text-center bg-dark">
      <div class="card-header"></div>
      <div class="card-body min">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text text-info ">Transaction was Successfull</p>

        <a href="/" class="btn btn-primary bg-success">
          Home
        </a>
      </div>
      <div class="card-footer text-muted">Verified transaction</div>
    </div>
  );
};

export default Success;
