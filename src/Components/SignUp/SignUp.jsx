import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../Services/Auth";
import "./SignUp.css"; // تأكدي من وجود ملف CSS

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await userRegister(data.email, data.password);
      toast.success("Sign up successful!");
      navigate("/Login");
    } catch (error) {
      console.error("SignUp Error:", error);
      toast.error(error.message || "Please check your email and password");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card shadow">
        <h3 className="text-center mb-4">Sign Up</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col xs={12}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="danger" type="submit" className="w-100">
              Sign Up
            </Button>
          </div>
          <Toaster position="top-center" />
        </Form>
      </div>
    </div>
  );
}
