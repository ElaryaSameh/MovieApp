import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/Auth";
import { useContext } from "react";
import { authContext } from "../../context/auth";
import "./Login.css"; // تأكد تضيف ملف CSS ده

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setIsAuth } = useContext(authContext);

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data.email, data.password);
      const user = res.user;

      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem("token", token);
        setIsAuth(true);
      }

      toast.success("Login successful!");
      navigate("/Products");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || "Please check your login credentials");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card shadow">
        <h3 className="text-center mb-4">Login</h3>
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
              Login
            </Button>
          </div>
          <Toaster position="top-center" />
        </Form>
      </div>
    </div>
  );
}
