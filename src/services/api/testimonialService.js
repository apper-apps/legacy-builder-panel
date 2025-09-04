import testimonialsData from "@/services/mockData/testimonials.json";

class TestimonialService {
  constructor() {
    this.testimonials = [...testimonialsData];
  }

  async getAll() {
    await this.delay(250);
    return [...this.testimonials];
  }

  async getById(id) {
    await this.delay(200);
    const testimonial = this.testimonials.find(t => t.Id === parseInt(id));
    if (!testimonial) {
      throw new Error("Testimonial not found");
    }
    return { ...testimonial };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new TestimonialService();