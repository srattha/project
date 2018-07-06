
@extends('admin.admin')

@section('css')
<style type="text/css">
.switchery {
    background-color: #F44336 !important;
  }
</style>
@endsection

@section('content')
<div ng-controller="ReservationsController">
  <div class="panel" >
    <div class="panel-heading bg-primary">
      <h1 class="panel-title text-semibold">แสดงรายการ การจองโต็ะ</h1>
      <div class="heading-elements">
       <!-- <button class="btn bg-cakebox-2" ng-click="modaldevicelog()"><i class="icon-plus-circle2"></i> Devicelog</button> -->
     </div>
   </div>
   <div class="row" style="padding: 10px;">
    <div class="col-xs-6 col-md-3">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-4">
           <img src="/img/true.png" style="width: 100%;">
         </div>
         <div class="col-md-8">
          <span class="label bg-success heading-text">ว่าง</span>
        </div>
      </div>
      <img src="/img/table.png">
      <div class="caption">
       <p>โต๊ะ: 2</p>
       <p>จำนวนที่นั่ง: 2</p>
     </div>
     <div><button type="button" class="btn btn-primary btn-block" disabled>ยืนยันสถานะ</button></div>
   </div>
 </div>
 <div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <div class="row">
      <div class="col-md-4">
       <img src="/img/true.png" style="width: 100%;">
     </div>
     <div class="col-md-8">
      <span class="label bg-success heading-text">ว่าง</span>
    </div>
  </div>
  <img src="/img/table.png">
  <div class="caption">
   <p>โต๊ะ: 3</p>
   <p>จำนวนที่นั่ง: 4</p>
 </div>
 <div><button type="button" class="btn btn-primary btn-block" disabled>ยืนยันสถานะ</button></div>
</div>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <div class="row">
      <div class="col-md-4">
       <img src="/img/false.png" style="width: 100%;">
     </div>
     <div class="col-md-8">
      <span class="label bg-danger-400 heading-text">ไม่ว่าง</span>
    </div>
  </div>
  <img src="/img/table.png">
  <div class="caption">
   <p>โต๊ะ: 4</p>
   <p>จำนวนที่นั่ง: 6</p>
 </div>
 <div><button type="button" class="btn btn-primary btn-block">ยืนยันสถานะ</button></div>
</div>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <div class="row">
      <div class="col-md-4">
       <img src="/img/false.png" style="    width: 100%;">
     </div>
     <div class="col-md-8">
       <span class="label bg-danger-400 heading-text">ไม่ว่าง</span>
     </div>
   </div>
   <img src="/img/table.png" alt="Boats at Phi Phi, Thailand">
   <div class="caption">
     <p>โต๊ะ: 5</p>
     <p>จำนวนที่นั่ง: 8</p>
   </div>
   <div><button type="button" class="btn btn-primary btn-block" ng-click="modal()">ยืนยันสถานะ</button></div>
 </div>
</div>
</div>

<div id="form" class="modal fade">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <button type="button" data-dismiss="modal" class="close">×</button>
        <h5 class="modal-title">รายการอาหาร โต๊ะ 5</h5>
      </div>
      <div class="modal-body">
        <div>
          <label><b>วันที่:</b> 07/06/2018</label>
        </div>
        <div>
          <label><b>ชื่อ:</b> คนจอง</label>
        </div>
        <div>
          <label><b>โต๊ะ:</b> 5</label>
        </div>
        <div>
          <label><b>จำนวนที่นั่ง:</b> 5</label>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>รายการอาหาร</th>
                <th>ยอดรวมที่ต้องชำระ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>ต้มยำกุ่ง 80 บาท</p>
                  <p>ลาบ 60 บาท</p>
                  <p>เบียลิโอ 80 บาท</p>
                </td>
                <td>220 บาท</td>
                <td>
                  <div>
                  <label>
                        <input type="checkbox" ng-model="form.active" ng-change="myFunc(form.active)" ng-true-value="1" ng-false-value="0" /> <span ng-if="active == 0" class="label bg-danger-400 heading-text">ยังไม่ได้จ่าย</span>
                        <span ng-if="active == 1" class="label bg-success heading-text">จ่ายแล้ว</span>
                      </label>


                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" data-dismiss="modal" class="btn btn-link"> <i class="icon-cross2"></i> ยกเลิก</button>
        <button type="submit" class="btn  bg-slate-800" ng-disabled="active == 0"> <i class="icon-floppy-disk"></i> ยืนยัน</button>
      </div>

    </div>
  </div>
</div>
</div>
</div>


@endsection
@section('script')
<script type="text/javascript">

</script>
<script type="text/javascript" src="{{ asset('assets/js/angular/controller/ReservationsController.js') }}"></script>
@endsection
