import Button from 'react-bootstrap/Button';

function CustomeButton({title, disabled, onClick}) {
  return (
    <>
      <style type="text/css">
        {`
            .btn-primary {
                background-color: #FFCD37; ;
                color: black;
                border: 2px solid black;
                border-radius: 30px;
                font-size: larger;
                font-weight: bold;
                padding: 10px 100px;
                text-decoration: none
            }

            .btn-primary:hover, .btn-primary:focus {
                background-color: #fdb438;
                color: black;
                border: 2px solid black;
            }

            .btn-primary:disabled {
                background-color: #9E9E9E;
                color: #3e3e3e;
                border: 2px solid transparent;
                cursor: default
            }
        `}
      </style>

      <div className="d-flex justify-content-center">
        <Button variant="primary" disabled={disabled} onClick={onClick} size='xl'>
            {title}
        </Button>
      </div>
    </>
  );
}

export default CustomeButton;