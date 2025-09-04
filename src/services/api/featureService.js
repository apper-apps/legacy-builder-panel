import featuresData from "@/services/mockData/features.json";

class FeatureService {
  constructor() {
    this.features = [...featuresData];
  }

  async getAll() {
    await this.delay(200);
    return [...this.features];
  }

  async getById(id) {
    await this.delay(150);
    const feature = this.features.find(f => f.Id === parseInt(id));
    if (!feature) {
      throw new Error("Feature not found");
    }
    return { ...feature };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new FeatureService();