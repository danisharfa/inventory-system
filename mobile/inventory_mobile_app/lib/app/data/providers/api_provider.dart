import 'package:get/get.dart';
import '../models/product_model.dart';

class ApiProvider extends GetConnect {
  final String baseUrl = 'http://10.0.2.2:8080';

  @override
  void onInit() {
    super.onInit();
    httpClient.baseUrl = '$baseUrl/api';
    httpClient.timeout = const Duration(seconds: 30);
  }

  Future<List<Product>> getProducts() async {
    try {
      final response = await get('/product');

      if (response.statusCode == 200) {
        final jsonData = response.body as List;
        return jsonData
            .map((item) => Product.fromJson(item as Map<String, dynamic>))
            .toList();
      } else {
        throw Exception('Failed to fetch products');
      }
    } catch (error) {
      throw Exception('Error: $error');
    }
  }

  Future<Product> getProductDetail(int id) async {
    try {
      final response = await get('/product/$id');

      if (response.statusCode == 200) {
        return Product.fromJson(response.body as Map<String, dynamic>);
      } else {
        throw Exception('Failed to fetch product detail');
      }
    } catch (error) {
      throw Exception('Error: $error');
    }
  }
}
