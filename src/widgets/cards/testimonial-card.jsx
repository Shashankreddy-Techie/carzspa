import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TestimonialCard({ content, name, position, image }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <CardBody className="px-8">
        <Typography
          variant="paragraph"
          className="font-normal text-white mb-6"
        >
          "{content}"
        </Typography>
        <Avatar
          src={image}
          alt={name}
          size="lg"
          className="mx-auto mb-4"
        />
        <Typography variant="h6" color="white" className="mb-1">
          {name}
        </Typography>
        <Typography className="font-normal text-white">
          {position}
        </Typography>
      </CardBody>
    </Card>
  );
}

TestimonialCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialCard;